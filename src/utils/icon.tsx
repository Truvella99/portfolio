import { IconType } from "react-icons";

interface IconUtilityProps {
    Icon: IconType;
    link: string;
}

export default function IconUtility({ Icon, link }: IconUtilityProps) {
    return (
        <Icon
            style={{
                cursor: 'pointer',
                transition: 'opacity 0.3s ease', // Smooth transition when opacity changes
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.5')} // Set to 50% transparency
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')} // Reset to fully opaque
            onClick={() => window.open(link, '_blank')} // Open a new tab
        />
    );
}