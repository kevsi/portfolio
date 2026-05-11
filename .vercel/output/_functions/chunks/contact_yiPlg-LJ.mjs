import { $ as $$Layout, a as $$Container } from './Layout_CcilzrI9.mjs';
import { c as createComponent } from './astro-component_BnViQcmF.mjs';
import { D as maybeRenderHead, a5 as addAttribute, b3 as renderSlot, U as renderTemplate, G as Fragment } from './sequence_BNAJhPRP.mjs';
import { s as spreadAttributes, r as renderComponent } from './entrypoint_DDw-AdPd.mjs';
import { $ as $$Sectionhead } from './sectionhead_DYKEnRwB.mjs';
import { $ as $$Icon } from './Icon_BjVmx_-g.mjs';

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/alex/Documents/Workspace/portfolio/src/components/ui/button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- To make this contact form work, create your free access key from https://web3forms.com/\n     Then you will get all form submissions in your email inbox. -->", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate data-astro-cid-uwnxe3i2> <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" data-astro-cid-uwnxe3i2> <!-- Create your free access key from https://web3forms.com/ --> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2> <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Full Name" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your full name.\n</div> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your email address.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide a valid email address.\n</div> </div> <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease enter your message.\n</div> </div> ', ' <div id="result" class="mt-3 text-center" data-astro-cid-uwnxe3i2></div> </form>  <script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    e.preventDefault();\n    form.classList.add("was-validated");\n    if (!form.checkValidity()) {\n      form.querySelectorAll(":invalid")[0].focus();\n      return;\n    }\n    const formData = new FormData(form);\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Sending...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.classList.add("text-green-500");\n          result.innerHTML = json.message;\n        } else {\n          result.classList.add("text-red-500");\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        form.classList.remove("was-validated");\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 5000);\n      });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "data-astro-cid-uwnxe3i2": true }, { "default": async ($$result2) => renderTemplate`Send Message` }));
}, "/home/alex/Documents/Workspace/portfolio/src/components/contactform.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a here to help.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Contact` })}` })} ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-gray-800">Contact Astroship</h2> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Have something to say? We are here to help. Fill up the form or send
          email or call phone.
</p> <div class="mt-5"> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })} <span>1734 Sanfransico, CA 93063</span> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })}<a href="mailto:hello@astroshipstarter.com">hello@astroshipstarter.com</a> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:phone" })}<a href="tel:+1 (987) 4587 899">+1 (987) 4587 899</a> </div> </div> </div> <div> ${renderComponent($$result3, "Contactform", $$Contactform, {})} </div> </div> ` })} ` })}`;
}, "/home/alex/Documents/Workspace/portfolio/src/pages/contact.astro", void 0);

const $$file = "/home/alex/Documents/Workspace/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
