// Apply hex colors from Pygments token classes
// Classes look like: -McHexRRGGBB or -McHexRRGGBBl (with formatting suffixes)
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with hex color tokens
    document.querySelectorAll('.highlight span[class*="-McHex"]').forEach(function(el) {
        // Extract hex color from class name
        var match = el.className.match(/-McHex([0-9A-Fa-f]{6})(l?o?n?)/);
        if (match) {
            var hexColor = '#' + match[1];
            var formatting = match[2] || '';

            el.style.color = hexColor;

            if (formatting.includes('l')) {
                el.style.fontWeight = 'bold';
            }
            if (formatting.includes('o')) {
                el.style.fontStyle = 'italic';
            }
            if (formatting.includes('n')) {
                el.style.textDecoration = 'underline';
            }
        }
    });
});
