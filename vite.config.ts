import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		__EMAILJS_SERVICE_ID__: process.env.VITE_EMAILJS_SERVICE_ID,
		__EMAILJS_TEMPLATE_ID__: process.env.VITE_EMAILJS_TEMPLATE_ID,
		__EMAILJS_PUBLIC_KEY__: process.env.VITE_EMAILJS_PUBLIC_KEY,
		__EMAIL_ATTEMPTS__: process.env.VITE_EMAIL_ATTEMPTS,
		__IMPRINTING_COIN_PRE_VENDA_LINK__:
			process.env.VITE_IMPRINTING_COIN_PRE_VENDA_LINK,
		__SOCIAL_INSTAGRAM_LINK__: process.env.VITE_SOCIAL_INSTAGRAM_LINK,
		__SOCIAL_LINKEDIN_LINK__: process.env.VITE_SOCIAL_LINKEDIN_LINK,
		__SOCIAL_YOUTUBE_LINK__: process.env.VITE_SOCIAL_YOUTUBE_LINK,
		__NUMERO_TELEFONE_PAIS__: process.env.VITE_NUMERO_TELEFONE_PAIS,
		__NUMERO_TELEFONE_DDD__: process.env.VITE_NUMERO_TELEFONE_DDD,
		__NUMERO_TELEFONE__: process.env.VITE_NUMERO_TELEFONE,
		___VITE_EMAIL__: process.env.VITE_EMAIL,
	},
});
