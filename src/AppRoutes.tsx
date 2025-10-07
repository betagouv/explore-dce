// AppRoutes.tsx
import Layout from '@src/pages/Layout';
import ROUTES from '@src/constants/routes';
import DCEProviders from '@src/contexts/DCEProviders';
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router";

export const AppRoutes = () => {

    // Build the private routes.
    const privateRoutes = ROUTES.filter(r => r.isPrivate && r.condition).map(r => ({
        path: r.path,
        element: r.element,
    }));

    // Build public routes.
    const publicRoutes = ROUTES.filter(r => !r.isPrivate && r.condition).map(r => ({
        path: r.path,
        element: r.element,
    }));

    // Define the route configuration.
    const routes = [
        ...privateRoutes,  // DCE Light ne prend pas en charge les routes privées.
        ...publicRoutes,
    ];

    // Create the router with the DCEProviders and Layout wrapping your routes.
    const router = createBrowserRouter([
        {
            element: (
                <DCEProviders>
                    <Layout />
                </DCEProviders>
            ),
            children: routes,
        },
    ]);

    return <RouterProvider router={router} />;
};
