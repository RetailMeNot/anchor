export interface LinkProperties {
    description?: string;
    hide?: boolean;
    path?: string;
    title: string;
    type?: string;
}

export interface SectionProperties {
    links: LinkProperties[];
    pattern: string;
    title: string;
}

interface Sections extends Array<SectionProperties> {}

export const sections: Sections = [
    {
        title: 'OVERVIEW',
        pattern: '/overview',
        links: [
            {
                title: 'Introduction',
                path: '/overview/',
            },
        ],
    },

    {
        title: 'COMPONENTS',
        pattern: '/components',
        links: [
            {
                title: 'All',
                path: '/components/',
                hide: false,
            },
            {
                title: 'AutoComplete',
                path: '/components/autocomplete/',
                description: `Enables users to quickly find and select from a pre-populated list of
                values as they type, leveraging searching and filtering.`,
            },
            {
                title: 'Avatar',
                path: '/components/avatar/',
                description: `The Avatar component renders a generic avatar graphic, or a stylized
                label.`,
            },
            {
                title: 'Badge',
                path: '/components/badge/',
                description: `The Badge component displays a dot or a circle with a count. It is
                normally used to indicate pending items (items in cart, unread messages, etc.).`,
            },
            {
                title: 'Button',
                path: '/components/button/',
                description: `Buttons are used to complete an action or make a choice. Some examples
                include Add, Save, Delete, Sign up. As a general rule, each page should have one
                primary button. Any remaining calls-to-action are represented as outline buttons
                (e.g. Cancel).`,
            },
            {
                title: 'Card',
                path: '/components/card/',
                description: `The Card component is intended to be used to convey short pieces of
                information, such as offers. They are designed to be relatively small in size,
                although Anchor\'s Card component is very flexible in this regard, expanding to
                accomodate whatever content is within it.`,
            },
            {
                title: 'Collapse',
                path: '/components/collapse/',
                description: `The Collapse component allows a user to click on a button and toggle
                the rendering of its child. This site uses this component and the CollapseGroup
                component for its side navigation. Note that it does not simply show/hide content,
                it re-renders it.`,
            },
            {
                title: 'DropDown',
                path: '/components/dropdown/',
                description: `The DropDown component provides an api to allow any component/node to
                have another element's display property toggle between none and block whenever it is
                hovered over/left. This can be used to create a standard DropDown menu, although
                it's not limited that usage.`,
            },
            {
                title: 'Grid',
                path: '/components/grid/',
                description: `Grid itself is actually not a component, but a collection of
                    components that interact with one another to provide a responsive layout.`,
                hide: false,
            },
            {
                title: 'Hero',
                path: '/components/hero/',
                description: `The Hero component is used to display a website hero which spans from
                edge to edge of available space while centering it's content. Graphics, buttons and
                any other element can be used inside of a Hero.`,
            },
            {
                title: 'Icon',
                path: '/components/icon/',
                description: `All of the icons are svg's, and can be colored and scaled as needed.
                Anchor does not group all of the icons together, rather they are individually
                imported in order to keep the bundle size small. All icons are rendered individually
                by their name, i.e. ArrowBack or Expand, as shown below.`,
            },
            {
                title: 'Input',
                path: '/components/input/',
                description: `The Input component generates an input element with event handlers,
                customization options, and accessibility standards. It can be configured to by of any
                of the following types: email, number, tel and text.`,
            },
            {
                title: 'Layout',
                path: '/components/layout/',
                hide: true,
            },
            {
                title: 'List',
                path: '/components/list/',
                description: `The List component organizes a number of other Anchor components
                (ListDivider, ListItem & ListTitle) into a vertical list. `,
            },
            {
                title: 'Menu',
                path: '/components/menu/',
                description: `The Menu component pulls together links into a single horizontal menu
                bar with unified styling. It is composed of two components: Menu and MenuItem. `,
            },
            {
                title: 'Modal',
                path: '/components/modal/',
                description: `The Modal component is an overlay over all content on the page,
                presenting its own content area for the user to interact with. `,
            },
            {
                title: 'Tooltip',
                path: '/components/tooltip/',
                description: `The Tooltip component is used to display a hint to a user.`,
            },
            {
                title: 'Typography',
                path: '/components/typography/',
                description: `The Typography component lets you easily add unified text styles to the
                page without having to create a lot of extra CSS.`,
            },
            {
                title: 'ComponentInfo',
                path: '',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
                    condimentum elit, id aliquet sapien sollicitudin eget. Fusce semper dapibus nisl
                    non blandit.`,
                hide: true,
            },
        ],
    },

    {
        title: 'THEME',
        pattern: '/theme',
        links: [
            {
                title: 'colors',
                path: '/theme/colors',
            },
            {
                title: 'ThemeProvider',
                path: '/theme/theme-provider',
            },
        ],
    },

    {
        title: 'CONTRIBUTE',
        pattern: '/contribute',
        links: [
            {
                title: 'Introduction',
                path: '/contribute',
            },
            {
                title: 'Components',
                type: 'title',
            },
            {
                title: 'ApiTable',
                path: '/contribute/components/apitable',
            },
            {
                title: 'ColorBlurb',
                path: '/contribute/components/colorblurb',
            },
            {
                title: 'ComponentInfo',
                path: '/contribute/components/componentinfo',
            },
            {
                title: 'FormatTypes',
                path: '/contribute/components/formattypes',
            },
            {
                title: 'Templates',
                type: 'title',
            },
            {
                title: 'Basic Component',
                path: '/contribute/basictemplate',
            },
            {
                title: 'Example Component',
                path: '/contribute/exampletemplate',
            },
            {
                title: 'Multiple Components',
                path: '/contribute/multipletemplate',
            },
        ],
    },
];
