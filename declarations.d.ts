// Declare .jsonc modules as objects
declare module "*.jsonc" {
    const value: Record<string, any>;
    export default value;
}