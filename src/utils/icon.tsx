import { IconType } from "react-icons";
import { IconContext } from "react-icons";

interface IconUtilityProps {
    Icon: IconType;
    link?: string;
}

export default function IconUtility({ Icon, link }: IconUtilityProps) {
    return (
        <IconContext.Provider value={{ size: '2em', className: "global-class-name" }}>
            {(link) ?
                <Icon
                    style={{
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease', // Smooth transition when opacity changes
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.5')} // Set to 50% transparency
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')} // Reset to fully opaque
                    onClick={(e) => window.open(link, '_blank')} // Open a new tab
                /> :
                <Icon />
            }
        </IconContext.Provider>
    );
}