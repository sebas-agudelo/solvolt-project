export const getHref = (key: string, value: string) => {
    switch (key) {
        case "phone":
        case "emergencyNumber":
            return `tel:${value}`;
        case "email":
            return `mailto:${value}`;
        default:
            return null;
    }
}
