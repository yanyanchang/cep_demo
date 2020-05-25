beta :
		rm -rf ./dist
		npm run build
		rm -rf /Library/Application\ Support/Adobe/CEP/extensions/com.helloworld
		mkdir -p /Library/Application\ Support/Adobe/CEP/extensions/com.helloworld && cp -r ./dist/ /Library/Application\ Support/Adobe/CEP/extensions/com.helloworld/