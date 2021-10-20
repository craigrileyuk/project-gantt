<!-- use Playground.vue to play around with the gantt chart components and test out new features -->
<template>
	<div id="gantt-wrapper">
		<project-gantt-chart
			:chart-start="chartStart"
			:chart-end="chartEnd"
			:grid="grid"
			:hide-timeaxis="hideTimeaxis"
			:push-on-overlap="true"
			snap-back-on-overlap
			:highlighted-hours="highlightedHours"
			:row-label-width="`${rowLabelWidth}%`"
			:row-height="rowHeight"
			:theme="selectedTheme"
			:snap-minutes="5"
			@dragend-bar="onDragend($event)"
		>
			<template v-for="row in rowList">
				<project-gantt-row
					:key="row.label"
					:label="row.label"
					:bars="row.barList"
					:highlight-on-hover="highlightOnHover"
					bar-start="startTime"
					bar-end="endTime"
				>
					<template #bar-label="{bar}">
						<span>{{ bar.label }}</span>
					</template>
				</project-gantt-row>
			</template>
		</project-gantt-chart>
	</div>
</template>

<script>
import { ProjectGanttChart, ProjectGanttRow } from "../src";

export default {
	components: {
		ProjectGanttChart,
		ProjectGanttRow,
	},
	data() {
		return {
			chartStart: "2020-03-02 00:00",
			chartEnd: "2020-03-04 00:00",
			pushOnOverlap: true,
			grid: true,
			rowHeight: 40,
			rowLabelWidth: 15,
			hideTimeaxis: false,
			highlightOnHover: true,
			hours: [...Array(24).keys()],
			highlightedHours: [10, 12],
			showContextmenu: false,
			contextmenuTimeout: null,
			contextmenuX: 0,
			contextmenuY: 0,
			selectedTheme: "material-blue",
			themes: [
				"default",
				"vue",
				"dark",
				"material-blue",
				"creamy",
				"slumber",
				"sky",
				"crimson",
				"grove",
				"fuchsia",
				"flare",
			],
			rowList: [
				{
					label: "Row #1",
					barList: [
						{
							startTime: "2020-03-03 18:00",
							endTime: "2020-03-03 23:00",
							label: "Immobile",
							ganttBarConfig: {
								color: "white",
								backgroundColor: "#404040",
								opacity: 0.5,
								immobile: true,
							},
						},
						{
							startTime: "2020-03-03 04:00",
							endTime: "2020-03-03 15:00",
							label: "Bar",
							ganttBarConfig: { color: "white", backgroundColor: "#2e74a3", bundle: "blueBundle" },
						},
					],
				},

				{
					label: "Row #2",
					barList: [
						{
							startTime: "2020-03-02 09:00",
							endTime: "2020-03-02 18:00",
							image: "vue_ganttastic_logo_no_text.png",
							label: "I have an image",
							ganttBarConfig: { color: "white", backgroundColor: "#de3b26", bundle: "redBundle" },
						},
						{
							startTime: "2020-03-03 18:00",
							endTime: "2020-03-03 22:00",
							label: "Bar",
							ganttBarConfig: { color: "white", backgroundColor: "#aa34a3" },
						},
					],
				},

				{
					label: "Row #3",
					barList: [
						{
							startTime: "2020-03-02 09:00",
							endTime: "2020-03-02 18:00",
							label: "I'm with that guy ^",
							ganttBarConfig: { color: "white", backgroundColor: "#de3b26", bundle: "redBundle" },
						},
						{
							startTime: "2020-03-02 22:30",
							endTime: "2020-03-03 05:00",
							label: "With handles!",
							ganttBarConfig: {
								color: "white",
								backgroundColor: "linear-gradient(to bottom right, rgb(255,0,0), rgb(0, 255, 0)",
								handles: true,
							},
						},
						{
							startTime: "2020-03-02 01:00",
							endTime: "2020-03-02 07:00",
							label: "Bar",
							ganttBarConfig: {
								color: "white",
								backgroundColor: "#5effad",
								pushOnOverlap: true,
								//			zIndex: 2,
							},
						},
					],
				},

				{
					label: "Row #4",
					barList: [
						{
							startTime: "2020-03-03 06:30",
							endTime: "2020-03-03 20:00",
							label: "Bar",
							ganttBarConfig: { color: "white", backgroundColor: "#d18aaf", handles: true },
						},
						{
							startTime: "2020-03-02 00:30",
							endTime: "2020-03-03 01:00",
							label: "Rectangular",
							ganttBarConfig: { color: "white", backgroundColor: "#f2840f", borderRadius: 0 },
						},
					],
				},
			],
		};
	},

	methods: {
		onDragend(e) {
			// console.log(e);
		},
	},
};
</script>

<style>
#gantt-wrapper {
	height: 50vh;
	overflow-y: auto;
}
</style>
