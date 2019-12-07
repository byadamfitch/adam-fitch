import PropTypes from 'prop-types';

export const color = {
	primary: {
		light: 'rgb(255,245,155)',
		medium: 'rgb(255,235,0)',
		dark: 'rgb(200,155,0)',
	},
	mono: {
		lightest: 'rgb(255,255,255)',
		lighter: 'rgb(200,200,200)',
		light: 'rgb(155,155,155)',
		dark: 'rgb(40,40,40)',
		darker: 'rgb(20,20,20)',
		darkest: 'rgb(0,0,0)',
	},
};

export function setThemeColor(s) {
	switch (s) {
		case 'light':
			return `
			--color-primary-light: ${color.primary.light};
			--color-primary-medium: ${color.primary.medium};
			--color-primary-dark: ${color.primary.dark};

			--color-link-resting:  ${color.primary.dark};
			--color-link-hover:  ${color.primary.medium};

			--color-text-title: ${color.mono.darkest};
			--color-text-content: ${color.mono.dark};

			--color-level-background: ${color.mono.lightest};
			--color-level-accent: ${color.mono.light};

			--color-level-1: ${color.mono.lightest};
			--color-level-2: ${color.mono.lighter};
			--color-level-3: ${color.mono.light};
			--color-level-4: ${color.mono.dark};
			--color-level-5: ${color.mono.darker};
			--color-level-6: ${color.mono.darkest};
		`;
		case 'dark':
		default:
			return `
			--color-primary-light: ${color.primary.light};
			--color-primary-medium: ${color.primary.medium};
			--color-primary-dark: ${color.primary.dark};

			--color-link-resting:  ${color.primary.light};
			--color-link-hover:  ${color.primary.medium};

			--color-text-title: ${color.mono.lightest};
			--color-text-content: ${color.mono.light};

			--color-level-background: ${color.mono.darkest};
			--color-level-accent: ${color.mono.dark};

			--color-level-1: ${color.mono.darkest};
			--color-level-2: ${color.mono.darker};
			--color-level-3: ${color.mono.dark};
			--color-level-4: ${color.mono.light};
			--color-level-5: ${color.mono.lighter};
			--color-level-6: ${color.mono.lightest};
		`;
	}
}
setThemeColor.propTypes = {
	s: PropTypes.oneOf(['switch', 'switch-invert', 'invert', 'default']).isRequired,
};
