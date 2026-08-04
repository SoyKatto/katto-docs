// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Katto Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/SoyKatto' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/SoyKatto1' },
				{ icon: 'patreon', label: 'Patreon', href: 'https://www.patreon.com/BannedStudios' },
			],
			sidebar: [
				{
					label: 'Inicio',
					slug: '',
				},
				{
					label: 'Common Utils',
					items: [
						{ label: '¿Qué es y Diferencias?', slug: 'common-utils/overview' },
						{ label: 'Xaero\'s Utils (Waypoints)', slug: 'common-utils/xaeros-utils' },
						{ label: 'Indicador PVP y Temporizadores', slug: 'common-utils/pvp-indicator' },
						{ label: 'Bloqueo de Teclas', slug: 'common-utils/key-disabled' },
						{ label: 'Multimedia y Cinemáticas', slug: 'common-utils/multimedia' },
						{ label: 'Gestor de Idiomas (LangManager)', slug: 'common-utils/lang-manager' },
					],
				},
			],
		}),
	],
});
