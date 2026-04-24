const fs = require('fs');
const path = require('path');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('./src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Backgrounds
        content = content.replace(/bg-\[#121212\]/g, 'bg-slate-50');
        content = content.replace(/bg-\[#181818\]/g, 'bg-white');
        content = content.replace(/bg-black/g, 'bg-slate-900');
        
        // Borders
        content = content.replace(/border-\[#282828\]/g, 'border-slate-200');
        content = content.replace(/border-\[#333333\]/g, 'border-slate-300');
        
        // Text
        content = content.replace(/text-\[#b3b3b3\]/g, 'text-slate-600');
        content = content.replace(/text-\[#808080\]/g, 'text-slate-500');
        content = content.replace(/text-white/g, 'text-slate-900');
        
        // Hovers
        content = content.replace(/hover:bg-\[#282828\]/g, 'hover:bg-slate-100');
        content = content.replace(/hover:text-white/g, 'hover:text-slate-900');
        
        // Fixes for buttons and specific components that need white text
        content = content.replace(/bg-primary-500 text-slate-900/g, 'bg-primary-500 text-white');
        content = content.replace(/bg-slate-900 text-slate-900/g, 'bg-slate-900 text-white');
        content = content.replace(/text-slate-900 hover:bg-slate-900/g, 'text-white hover:bg-slate-800');
        content = content.replace(/text-slate-900 hover:text-slate-900/g, 'text-slate-900 hover:text-primary-600');
        
        // Fix for specific button variants in ui/button.tsx
        if (filePath.includes('button.tsx')) {
            content = content.replace(/bg-red-600 text-slate-900/g, 'bg-red-600 text-white');
            content = content.replace(/bg-surface-hover text-slate-900/g, 'bg-slate-100 text-slate-900');
            content = content.replace(/text-gray-300/g, 'text-slate-600');
        }

        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Done replacing colors');
