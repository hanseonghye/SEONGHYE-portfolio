am4core.useTheme(am4themes_animated);

let chart = am4core.create("treemap", am4charts.TreeMap);
chart.data = [
    {
        "name": "BackEnd",
        "value": 150,
        "children": [
            {"name": "Flask", "value": 80, "color": "#0b147e"},
            {"name": "Django", "value": 20, "color": "#2f64ff"},
            {"name": "Node.js", "value": 50, "color": "#1220cb"}
        ]
    },
    {
        "name": "FrontEnd",
        "value": "90",
        "children": [
            {
                "name": "JavaScript",
                "value": 60,
                "color": "#c04328",
                "children": [
                    {"name": "Pure Javascript", "value": 35, "color": "#c0642a"},
                    {"name": "Vue.js", "value": 17, "color": "#eb9f35"},
                    {"name": "JQuery", "value": 8, "color": "#c0b31b"}
                ]
            },
            {
                "name": "HTML",
                "value": 20,
                "color": "#c07c60"
            },
            {
                "name": "CSS",
                "value": 10,
                "color": "#c0596d"
            }
        ]
    },
    {
        "name": "ETC",
        "value": 45,
        "children": [
            {"name": "AWS", "value": 15, "color": "#99ca15"},
            {"name": "Docker", "value": 5, "color": "#6fca61"},
            {
                "name": "DB",
                "value": 25,
                "color": "#008726",
                "children": [
                    {"name": "MySql", "value": 10, "color": "#12bc69"},
                    {"name": "MongoDB", "value": 15, "color": "#68e5a2"}
                ]
            }
        ]
    }
];

chart.colors.step = 2;

/* Define data fields */
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";
chart.dataFields.color = "color";
/* Create top-level series */
let level1 = chart.seriesTemplates.create("0");
let level1_column = level1.columns.template;
level1_column.fillOpacity = 0;
level1_column.strokeOpacity = 0;

/* Create second-level series */
let level2 = chart.seriesTemplates.create("1");
let level2_column = level2.columns.template;
level2_column.column.cornerRadius(10, 10, 10, 10);
level2_column.fillOpacity = 0.8;
level2_column.stroke = am4core.color("#fff");
level2_column.strokeWidth = 5;
level2_column.strokeOpacity = 1;

let level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

let level3 = chart.seriesTemplates.create("2");
let level3_column = level3.columns.template;
level3_column.column.cornerRadius(10, 10, 10, 10);
level2_column.fillOpacity = 0.8;
level2_column.stroke = am4core.color("#fff");
level2_column.strokeWidth = 5;
level2_column.strokeOpacity = 1;

let level3_bullet = level3.bullets.push(new am4charts.LabelBullet());
level3_bullet.locationY = 0.5;
level3_bullet.locationX = 0.5;
level3_bullet.label.text = "{name}";
level3_bullet.label.fill = am4core.color("#000000");

/* Add a navigation bar */
chart.navigationBar = new am4charts.NavigationBar();
