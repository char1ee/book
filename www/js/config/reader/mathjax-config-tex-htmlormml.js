MathJax.Hub.Config({config:["MMLorHTML.js"],extensions:["tex2jax.js","toMathML.js"],"HTML-CSS":{linebreaks:{automatic:!0,width:"95% container"}},jax:["input/TeX","output/NativeMML"],skipStartupTypeset:!0,"v1.0-compatible":!1,messageStyle:"simple",styles:{"#MathJax_MSIE_Frame":{left:"45%"},"#MathJax_Message":{top:"18.75em",left:"45%",color:"#999",border:"none",background:"none","font-size":"auto"}},showMathMenu:!1,showMathMenuMSIE:!1,positionToHash:!1,preRemoveClass:"mjp",errorSettings:{message:["[公式解析失败]"]}}),"simple"===MathJax.Hub.config.messageStyle&&(MathJax.Message.filterText=function(){var labelAlias={Loading:"加载资源文件...",Processing:"处理中...",Typesetting:"解析..."},progressAlias={"Typesetting math:":"处理数学公式:","Processing math:":"解析数学公式:"};return function(text){var alias,progressAliasMatch=text.match(/^\w+ math:/);if(progressAliasMatch&&(alias=progressAlias[progressAliasMatch[0]]))return text.replace(progressAliasMatch[0],alias);var labelAliasMatch=text.match(/^\w+/);return labelAliasMatch?labelAlias[labelAliasMatch[0]]:text}}()),MathJax.Ajax.loadComplete(Ark.MathJaxConfigPath);