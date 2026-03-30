export function showToast(message: string, isError = false): void {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 ${isError ? 'bg-red-600' : 'bg-green-600'} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-y-full transition-transform duration-300`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-full');
  }, 100);

  setTimeout(() => {
    toast.classList.add('translate-y-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}
