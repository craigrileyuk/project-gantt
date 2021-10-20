# project-gantt
<img src="https://user-images.githubusercontent.com/28678851/77186503-45358300-6ad3-11ea-9392-7f670eb1ca8c.png" width="600"/>

A simple and easy-to-use Gantt chart component for Vue.js

[Moment.js](https://momentjs.com/) is a peer-dependency of Project Gantt. In order for Project Gantt to work correctly, you need to install it in your project:
```
npm install moment
```

## Basic Usage
Import the components <code>ProjectGanttChart</code> and <code>ProjectGanttRow</code>.  
Use <code>project-gantt-chart</code> in your template, pass the desired chart start and chart end time as props (<code>chart-start</code> and <code>chart-end</code>) and add <code>project-gantt-row</code>s
to the default template slot.  
Pass an array containing your bar objects to every row using the <code>bars</code> prop, while specifying the name of the properties in your bar objects that stand for the bar start and bar end time using the props <code>bar-start</code> and <code>bar-end</code>  

The following code showcases a simple usage example in a .vue SFC (Single File Component)
```html
<template>
  ...

  <project-gantt-chart
    :chart-start="myChartStart"
    :chart-end="myChartEnd"
  >
    <project-gantt-row
      v-for="row in rows"
      :key="row.label"
      :label="row.label"
      :bars="row.bars"
      bar-start="myStart"
      bar-end="myEnd"
    />
  </project-gantt-chart>

  ...
</template>

<script>

import {ProjectGanttChart, ProjectGanttRow} from 'Project Gantt'

export default {

  ...

  components:{
    ProjectGanttChart,
    ProjectGanttRow
  },

  data(){
    return {
      myChartStart: "2020-03-01 00:00",
      myChartEnd: "2020-03-03 00:00",
      rows: [
        {
          label: "My row #1",
          bars: [
            {
              myStart: "2020-03-01 12:10",
              myEnd: "2020-03-01 16:35"
            }
          ]
        },
        {
          label: "My row #2",
          bars: [
            {
              myStart: "2020-03-02 01:00",
              myEnd: "2020-03-02 12:00"
            },
            {
              myStart: "2020-03-02 13:00",
              myEnd: "2020-03-02 22:00"
            }
          ]
        }
      ]
    }
  }

  ...

}
</script>

```

## Dependencies
[Moment.js](https://momentjs.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
