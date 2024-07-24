import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    // For older browsers fallback using document.execCommand
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Avoid scrolling to bottom
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      var success = document.execCommand('copy');
      // if (success) {
      //   console.log('Text copied to clipboard');
      // } else {
      //   console.error('Unable to copy text to clipboard');
      // }
    } catch (err) {
      console.error('Error copying text to clipboard', err);
    }

    document.body.removeChild(textarea);
    return;
  }

  // For modern browsers supporting Clipboard API
  navigator.clipboard.writeText(text)
  // navigator.clipboard.writeText(text).then(function() {
  //   console.log('Text copied to clipboard');
  // }, function(err) {
  //   console.error('Error copying text to clipboard', err);
  // });
}