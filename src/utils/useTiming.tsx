import { useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";

export const useTiming = (name: string) => {
	const [cookies, setCookie] = useCookies([name]);

	/**
	 * Check if the cookie has expired
	 */
	const isExpired = useCallback(() => {
		return cookies[name] == undefined;
	}, [cookies, name]);

	/**
	 * Set the expiration date of the cookie
	 * @param frequency The number of days until the cookie expires
	 */
	const setExpiration = useCallback((frequency: number) => {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + frequency);
		setCookie(name, "true", { expires: expirationDate, path: "/", sameSite: "lax" });
	}, [name, setCookie]);

	return useMemo(() => ({isExpired, setExpiration}), [isExpired, setExpiration]);
}
