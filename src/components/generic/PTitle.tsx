import { ReactNode } from "react";
import { Typography } from "@mui/material";

export const PTitle = ({
    children
}: {
    children?: ReactNode
}) => {
    return (
        <Typography variant="h6" gutterBottom mt={4} mb={2}>
            {children}
        </Typography>
    )
}