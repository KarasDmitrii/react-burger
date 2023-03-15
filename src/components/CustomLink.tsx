import { Link, useMatch } from "react-router-dom"
import { Ilocation } from "../utils/types";

type TlocationState = {
    from: Ilocation;
  }

export const CustomLink: React.FC<{children: React.ReactNode, to: string, className?: string, state?: TlocationState}> = ({children, to, ...className} ) => {
    const match = useMatch(to);
    return (
        <Link 
        to ={to} 
        {...className}
        
        style={{
            color: match ? 'white' : 'var(--text-inactive-color)'
        }}
        >
            {children}
        </Link>
    )
}
