import { Link, useMatch } from "react-router-dom"
import { ILocation } from "../utils/types";

type TlocationState = {
    from?: ILocation;
    background?: ILocation
}

export const CustomLink: React.FC<{ children: React.ReactNode, to: string, className?: string, state?: TlocationState }> = ({ children, to, ...className }) => {
    const match = useMatch(to);
    return (
        <Link
            to={to}
            {...className}

            style={{
                color: match ? 'white' : 'var(--text-inactive-color)',

                textDecoration: 'none'

}}
        >
    { children }
        </Link >
    )
}
