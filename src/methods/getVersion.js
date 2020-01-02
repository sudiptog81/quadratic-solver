import { version } from "../../package.json";

/**
 * Get the version of the package being used
 * @returns {string} version
 * @author sudipto
 */
const getVersion = () => `quadratic-solver v${version}`;

export default getVersion;