import { supabase } from './supabase';

export interface CartItem {
  id: string;
  user_id: string;
  item_type: 'avatar' | 'service' | 'product';
  item_id: string;
  item_name: string;
  item_price: number;
  item_image?: string;
  quantity: number;
  created_at: string;
}

export interface CartItemInput {
  item_type: 'avatar' | 'service' | 'product';
  item_id: string;
  item_name: string;
  item_price: number;
  item_image?: string;
  quantity?: number;
}

/**
 * Get all cart items for a user
 */
export async function getCart(userId: string): Promise<CartItem[]> {
  const { data, error } = await supabase
    .from('cart')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }

  return data || [];
}

/**
 * Add item to cart or increment quantity if already exists
 */
export async function addToCart(userId: string, item: CartItemInput): Promise<CartItem> {
  // First check if item already exists
  const { data: existing } = await supabase
    .from('cart')
    .select('*')
    .eq('user_id', userId)
    .eq('item_id', item.item_id)
    .eq('item_type', item.item_type)
    .single();

  if (existing) {
    // Increment quantity
    const { data, error } = await supabase
      .from('cart')
      .update({ quantity: existing.quantity + (item.quantity || 1) })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }

    return data;
  } else {
    // Insert new item
    const { data, error } = await supabase
      .from('cart')
      .insert({
        user_id: userId,
        item_type: item.item_type,
        item_id: item.item_id,
        item_name: item.item_name,
        item_price: item.item_price,
        item_image: item.item_image,
        quantity: item.quantity || 1,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }

    return data;
  }
}

/**
 * Remove item from cart
 */
export async function removeFromCart(userId: string, cartItemId: string): Promise<void> {
  const { error } = await supabase
    .from('cart')
    .delete()
    .eq('id', cartItemId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
}

/**
 * Update item quantity
 */
export async function updateQuantity(userId: string, cartItemId: string, quantity: number): Promise<void> {
  if (quantity <= 0) {
    await removeFromCart(userId, cartItemId);
    return;
  }

  const { error } = await supabase
    .from('cart')
    .update({ quantity })
    .eq('id', cartItemId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
}

/**
 * Clear entire cart
 */
export async function clearCart(userId: string): Promise<void> {
  const { error } = await supabase
    .from('cart')
    .delete()
    .eq('user_id', userId);

  if (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
}

/**
 * Get cart total amount
 */
export async function getCartTotal(userId: string): Promise<number> {
  const { data, error } = await supabase
    .from('cart')
    .select('item_price, quantity')
    .eq('user_id', userId);

  if (error) {
    console.error('Error calculating cart total:', error);
    throw error;
  }

  return data?.reduce((total, item) => total + (item.item_price * item.quantity), 0) || 0;
}

/**
 * Get total item count (sum of quantities)
 */
export async function getCartItemCount(userId: string): Promise<number> {
  const { data, error } = await supabase
    .from('cart')
    .select('quantity')
    .eq('user_id', userId);

  if (error) {
    console.error('Error getting cart item count:', error);
    throw error;
  }

  return data?.reduce((total, item) => total + item.quantity, 0) || 0;
}
