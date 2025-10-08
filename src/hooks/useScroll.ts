import { useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";

/**
 * Custom hook to track the active section in a scrollable container.
 * @param items Array of items to track
 * @param hashFmt A string format for the section IDs, where %i will be replaced by the index (1-based). Default is "section-%i".
 * @returns The index of the currently active section.
 */
export const useScroll = (items: any[], hashFmt: string = "section-%i") => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const sections = items.map((_, i) =>
			document.getElementById(hashFmt.replace("%i", String(i + 1)))
		);

		const handleScroll = throttle(() => {
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const triggerPoint = scrollY + viewportHeight / 2;

			let newActiveIndex = 0;

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				if (!section) continue;

				const rect = section.getBoundingClientRect();
				const sectionTop = scrollY + rect.top;
				const sectionBottom = sectionTop + rect.height;

				if (sectionTop <= triggerPoint && sectionBottom > triggerPoint) {
					newActiveIndex = i;
					break;
				}
			}

			setActiveIndex((prev) => {
				if (prev !== newActiveIndex) {
					const newHash = `#section-${newActiveIndex + 1}`;
					if (window.location.hash !== newHash) {
						window.history.replaceState(null, "", newHash);
					}
				}
				return newActiveIndex;
			});
		}, 100);

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			handleScroll.cancel?.();
		};
	}, [items]);

	return useMemo(() => activeIndex, [activeIndex]);
};
