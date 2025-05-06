import { IconContext } from "react-icons";
import type { IconUtilityProps } from "../../declarations";

export default function IconUtility({ Icon, link }: IconUtilityProps) {
    return (
        <IconContext.Provider value={{ size: '2em', className: "global-class-name" }}>
            {(link) ?
                <Icon
                    style={{
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease', // Smooth transition when opacity changes
                    }}
                    onMouseOver={(e: React.MouseEvent<SVGElement, MouseEvent>) => (e.currentTarget.style.opacity = '0.5')} // Set to 50% transparency
                    onMouseOut={(e: React.MouseEvent<SVGElement, MouseEvent>) => (e.currentTarget.style.opacity = '1')} // Reset to fully opaque
                    onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => window.open(link, '_blank')} // Open a new tab
                /> :
                <Icon />
            }
        </IconContext.Provider>
    );
}