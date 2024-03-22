import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import Track from "./pages/Track";
import { getArtistByCountry } from "./services/Artist.services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, loader: getArtistByCountry, element: <Home /> },
            {
                path: "artist/:id",
                element: <Artist />,
            },
            {
                path: "album/:id",
                element: <Album />,
            },
            {
                path: "track/:id",
                element: <Track />,
            }
        ],
    },
]);

export default router;
