import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.commands.register({
			name: "insertEmdash",
			label: "Insert emdash —",
			iconName: "fas fa-minus",
			execute: async () => {
				await joplin.commands.execute("insertText", `—`);
			}
		});
		await joplin.commands.register({
			name: "insertRightArrow",
			label: "Insert right arrow →",
			iconName: "fas fa-arrow-right",
			execute: async () => {
				await joplin.commands.execute("insertText", `→`);
			}
		});
		await joplin.views.toolbarButtons.create(
			"insertEmdashButton",
			"insertEmdash",
			ToolbarButtonLocation.EditorToolbar
		);
		await joplin.views.toolbarButtons.create(
			"insertRightArrowButton",
			"insertRightArrow",
			ToolbarButtonLocation.EditorToolbar
		);
	},
});
