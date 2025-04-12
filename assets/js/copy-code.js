document.addEventListener('DOMContentLoaded', function() {
  // Find all <pre><code> elements
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    // Get the parent <pre> element
    const preBlock = codeBlock.parentNode;
    
    // Create the copy button
    const copyButton = document.createElement('a');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.href = '#';
    
    // Add copy functionality
    copyButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get code content
      const code = codeBlock.textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(code).then(function() {
        // Temporary feedback
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        
        setTimeout(function() {
          copyButton.textContent = originalText;
        }, 1500);
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
      });
    });
    
    // Add the button to the pre element
    preBlock.appendChild(copyButton);
  });
}); 