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
					label: 'CatoCinema',
					items: [
						{ label: '¿Qué es e Instalación?', slug: 'catocinema/overview' },
						{ label: 'Comandos y Permisos', slug: 'catocinema/commands' },
						{ label: 'El Editor', slug: 'catocinema/editor' },
						{ label: 'Ajustes de Escena y Cámara', slug: 'catocinema/scenes' },
						{ label: 'Actores', slug: 'catocinema/actors' },
						{ label: 'Referencia de Clips', slug: 'catocinema/clips' },
						{ label: 'Assets (Audio e Imágenes)', slug: 'catocinema/assets' },
						{ label: 'Disparadores', slug: 'catocinema/triggers' },
						{ label: 'API para Desarrolladores', slug: 'catocinema/api' },
					],
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
				{
					label: 'Banned Core',
					items: [
						{ label: '¿Qué es y Configuración General?', slug: 'banned-core/overview' },
						{ label: 'Chat de Equipos y Colores Hex', slug: 'banned-core/chat-team' },
						{ label: 'TP por Área y Transiciones', slug: 'banned-core/tp-area-transition' },
						{ label: 'Gestor de Secuencias', slug: 'banned-core/sequences' },
						{ label: 'Tabla de Clasificación (Leaderboard)', slug: 'banned-core/leaderboard' },
						{ label: 'Indicaciones y Gestor de Espera', slug: 'banned-core/indications-waiting' },
						{ label: 'Bloqueo de Teclas (Suerte 100)', slug: 'banned-core/keybinds' },
						{ label: 'Silenciador de Voz (Plasmo Voice)', slug: 'banned-core/voice-mute' },
					],
				},
			],
		}),
	],
});
