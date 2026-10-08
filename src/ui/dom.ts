/** Fetches a required element by id, failing loudly if the markup is out of sync. */
export function requireElement<T extends HTMLElement = HTMLElement>(root: ParentNode, id: string): T {
  const element = root.querySelector<HTMLElement>(`#${id}`);
  if (element === null) {
    throw new Error(`Missing required UI element #${id}`);
  }
  return element as T;
}

/** Toggles an overlay class without touching the rest of the document. */
export function setVisible(element: HTMLElement, visible: boolean): void {
  element.classList.toggle('hidden', !visible);
}
