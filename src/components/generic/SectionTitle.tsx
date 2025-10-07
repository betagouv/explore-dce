import { ReactNode } from "react";
import { Typography } from "@mui/material";

export const SectionTitle = ({
    children,
}: {
    children?: ReactNode;
}) => {
    return (
        <Typography variant="h4" gutterBottom color="primary.main">
            {children}
        </Typography>
    );
}