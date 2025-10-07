export type Route = {
    id:        number,
    path:      string,
    navigation_name: string,
    name:      string,
    description: string | null,
    is_active: boolean,
    condition: boolean,
    isPrivate: boolean,
    element:   JSX.Element,
};
