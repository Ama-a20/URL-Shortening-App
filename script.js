
document.addEventListener('DOMContentLoaded', () => {
    
    const shortenForm = document.getElementById('shortenForm');
    const urlInput = document.getElementById('urlInput');
    const linksContainer = document.getElementById('linksContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    let shortenedLinks = [];
    
    loadSavedLinks();
    
    if (shortenForm) {
        shortenForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const url = urlInput.value.trim();
            
            if (!isValidUrl(url)) {
                showError('Please add a valid link (e.g., https://language.com)');
                return;
            }
            
            hideError();
            
            const submitBtn = shortenForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Shortening...';
            submitBtn.disabled = true;
            
            try {
                const shortenedUrl = await shortenUrl(url);
                displayShortenedLink(url, shortenedUrl);
                saveLinkToLocalStorage(url, shortenedUrl);
                urlInput.value = '';
            } catch (error) {
                console.error('Error:', error);
                showError('Failed to shorten URL. Please try again.');
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // URL validation
    function isValidUrl(string) {
        if (!string) return false;
        
        let urlToCheck = string;
        if (!string.startsWith('http://') && !string.startsWith('https://')) {
            urlToCheck = 'https://' + string;
        }
        
        try {
            new URL(urlToCheck);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    // SHORTEN URL - USING TINYURL (WORKING)
    async function shortenUrl(originalUrl) {
        let urlToShorten = originalUrl;
        if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
            urlToShorten = 'https://' + originalUrl;
        }
        
        // TinyURL API
        const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlToShorten)}`;
        
        const response = await fetch(apiUrl);
        const shortUrl = await response.text();
        
        if (!response.ok || !shortUrl || shortUrl.includes('error')) {
            throw new Error('API returned an error');
        }
        
        return shortUrl.trim();
    }
    
    function displayShortenedLink(originalUrl, shortenedUrl) {
        if (!linksContainer) return;
        
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        
        linkCard.innerHTML = `
            <span class="original-url">${escapeHtml(originalUrl)}</span>
            <div class="link-actions">
                <span class="shortened-url">${escapeHtml(shortenedUrl)}</span>
                <button class="copy-btn">Copy</button>
            </div>
        `;
        
        linksContainer.insertBefore(linkCard, linksContainer.firstChild);
        
        const copyButton = linkCard.querySelector('.copy-btn');
        copyButton.addEventListener('click', () => {
            copyToClipboard(shortenedUrl, copyButton);
        });
    }
    
    // Copy to clipboard
    async function copyToClipboard(text, buttonElement) {
        try {
            await navigator.clipboard.writeText(text);
            const originalText = buttonElement.textContent;
            buttonElement.textContent = 'Copied!';
            buttonElement.classList.add('copied');
            
            setTimeout(() => {
                buttonElement.textContent = originalText;
                buttonElement.classList.remove('copied');
            }, 2000);
        } catch (err) {
            
            const textarea = document.createElement('textarea'); // Fallback
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            const originalText = buttonElement.textContent;
            buttonElement.textContent = 'Copied!';
            buttonElement.classList.add('copied');
            
            setTimeout(() => {
                buttonElement.textContent = originalText;
                buttonElement.classList.remove('copied');
            }, 2000);
        }
    }
    
    function showError(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
        }
        if (urlInput) {
            urlInput.classList.add('error');
        }
    }
    
    function hideError() {
        if (errorMessage) {
            errorMessage.classList.remove('show');
        }
        if (urlInput) {
            urlInput.classList.remove('error');
        }
    }
    
    function saveLinkToLocalStorage(originalUrl, shortenedUrl) {
        const link = {
            id: Date.now(),
            original: originalUrl,
            shortened: shortenedUrl,
            date: new Date().toISOString()
        };
        
        shortenedLinks.unshift(link);
        
        if (shortenedLinks.length > 10) {
            shortenedLinks = shortenedLinks.slice(0, 10);
        }
        
        localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks));
    }
    
    function loadSavedLinks() {
        const saved = localStorage.getItem('shortenedLinks');
        
        if (saved) {
            try {
                shortenedLinks = JSON.parse(saved);
                shortenedLinks.forEach(link => {
                    displayShortenedLink(link.original, link.shortened);
                });
            } catch (e) {
                console.error('Failed to parse saved links:', e);
            }
        }
    }
    
    // Helper functions
    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    
    // Smooth scroll for buttons
    const heroButton = document.querySelector('.hero .btn-primary');
    const ctaButton = document.querySelector('.cta-button');
    const urlShortenerSection = document.querySelector('.url-shortener');
    
    if (heroButton && urlShortenerSection) {
        heroButton.addEventListener('click', (e) => {
            e.preventDefault();
            urlShortenerSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => urlInput?.focus(), 500);
        });
    }
    
    if (ctaButton && urlShortenerSection) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            urlShortenerSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => urlInput?.focus(), 500);
        });
    }
    
    if (urlInput) {
        urlInput.addEventListener('input', hideError);
    }
    
    console.log('URL Shortener ready! Using TinyURL API');
});