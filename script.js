// =====================================================
// AFL DATA VISUALISATION - VEGA-LITE SPECIFICATIONS
// =====================================================

// Sample AFL Teams Data
const aflTeams = [
    { "team": "Melbourne", "state": "Victoria", "founded": 1858, "latitude": -37.800, "longitude": 145.037, "premierships": 13, "wins": 1250 },
    { "team": "Collingwood", "state": "Victoria", "founded": 1892, "latitude": -37.800, "longitude": 145.037, "premierships": 16, "wins": 1280 },
    { "team": "Carlton", "state": "Victoria", "founded": 1864, "latitude": -37.800, "longitude": 145.037, "premierships": 16, "wins": 1290 },
    { "team": "Essendon", "state": "Victoria", "founded": 1872, "latitude": -37.800, "longitude": 145.037, "premierships": 16, "wins": 1300 },
    { "team": "Richmond", "state": "Victoria", "founded": 1885, "latitude": -37.800, "longitude": 145.037, "premierships": 13, "wins": 1200 },
    { "team": "Geelong", "state": "Victoria", "founded": 1859, "latitude": -38.150, "longitude": 144.360, "premierships": 9, "wins": 1150 },
    { "team": "Hawthorn", "state": "Victoria", "founded": 1902, "latitude": -37.800, "longitude": 145.037, "premierships": 13, "wins": 1100 },
    { "team": "St Kilda", "state": "Victoria", "founded": 1897, "latitude": -37.800, "longitude": 145.037, "premierships": 1, "wins": 900 },
    { "team": "North Melbourne", "state": "Victoria", "founded": 1869, "latitude": -37.800, "longitude": 145.037, "premierships": 4, "wins": 1000 },
    { "team": "Western Bulldogs", "state": "Victoria", "founded": 1883, "latitude": -37.800, "longitude": 145.037, "premierships": 2, "wins": 950 },
    { "team": "West Coast", "state": "Western Australia", "founded": 1987, "latitude": -31.941, "longitude": 115.817, "premierships": 4, "wins": 320 },
    { "team": "Fremantle", "state": "Western Australia", "founded": 1995, "latitude": -32.052, "longitude": 115.738, "premierships": 0, "wins": 210 },
    { "team": "Adelaide", "state": "South Australia", "founded": 1997, "latitude": -34.952, "longitude": 138.623, "premierships": 2, "wins": 200 },
    { "team": "Port Adelaide", "state": "South Australia", "founded": 1997, "latitude": -34.819, "longitude": 139.159, "premierships": 1, "wins": 180 },
    { "team": "Brisbane", "state": "Queensland", "founded": 1987, "latitude": -27.480, "longitude": 153.055, "premierships": 3, "wins": 310 },
    { "team": "Gold Coast", "state": "Queensland", "founded": 2011, "latitude": -27.976, "longitude": 153.428, "premierships": 0, "wins": 85 },
    { "team": "Sydney", "state": "New South Wales", "founded": 2012, "latitude": -33.852, "longitude": 151.213, "premierships": 0, "wins": 95 },
    { "team": "Hobart", "state": "Tasmania", "founded": 2019, "latitude": -42.877, "longitude": 147.329, "premierships": 0, "wins": 30 }
];

const teamsByState = [
    { "state": "Victoria", "teams": 10, "color": "#1a3a52" },
    { "state": "Western Australia", "teams": 2, "color": "#2d5a7b" },
    { "state": "South Australia", "teams": 2, "color": "#4a7ba7" },
    { "state": "Queensland", "teams": 2, "color": "#6d98b8" },
    { "state": "New South Wales", "teams": 1, "color": "#90afc7" },
    { "state": "Tasmania", "teams": 1, "color": "#b3c9d8" }
];

const seasonData = [
    { "season": 2015, "avgWins": 9.5 },
    { "season": 2016, "avgWins": 9.3 },
    { "season": 2017, "avgWins": 9.4 },
    { "season": 2018, "avgWins": 9.2 },
    { "season": 2019, "avgWins": 9.1 },
    { "season": 2020, "avgWins": 8.9 },
    { "season": 2021, "avgWins": 9.0 },
    { "season": 2022, "avgWins": 8.8 },
    { "season": 2023, "avgWins": 9.2 }
];

const stadiumData = [
    { "stadium": "MCG", "city": "Melbourne", "capacity": 100024 },
    { "stadium": "ANZ Stadium", "city": "Sydney", "capacity": 83500 },
    { "stadium": "AAMI Park", "city": "Melbourne", "capacity": 30050 },
    { "stadium": "Optus Stadium", "city": "Perth", "capacity": 60000 },
    { "stadium": "Gabba", "city": "Brisbane", "capacity": 39800 },
    { "stadium": "Adelaide Oval", "city": "Adelaide", "capacity": 53574 },
    { "stadium": "Etihad Stadium", "city": "Melbourne", "capacity": 55000 },
    { "stadium": "TIO Stadium", "city": "Darwin", "capacity": 13500 }
];

// =====================================================
// VIS 1: GEOGRAPHIC MAP OF AFL TEAMS
// =====================================================
const mapSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Geographic distribution of AFL teams across Australia",
    "title": "AFL Teams Location Map",
    "data": { "values": aflTeams },
    "projection": { "type": "mercator" },
    "mark": { "type": "circle", "tooltip": true },
    "encoding": {
        "longitude": { "field": "longitude", "type": "quantitative" },
        "latitude": { "field": "latitude", "type": "quantitative" },
        "color": {
            "field": "state",
            "type": "nominal",
            "scale": {
                "domain": ["Victoria", "Western Australia", "South Australia", "Queensland", "New South Wales", "Tasmania"],
                "range": ["#1a3a52", "#2d5a7b", "#4a7ba7", "#6d98b8", "#90afc7", "#b3c9d8"]
            },
            "title": "State"
        },
        "size": {
            "field": "premierships",
            "type": "quantitative",
            "scale": { "range": [100, 800] },
            "title": "Premierships"
        },
        "tooltip": [
            { "field": "team", "type": "nominal", "title": "Team" },
            { "field": "state", "type": "nominal", "title": "State" },
            { "field": "premierships", "type": "quantitative", "title": "Premierships" },
            { "field": "founded", "type": "quantitative", "title": "Founded" }
        ]
    },
    "width": 900,
    "height": 600,
    "config": {
        "mark": { "tooltip": true }
    }
};

// =====================================================
// VIS 2: TEAMS BY STATE (BAR CHART)
// =====================================================
const teamsPerStateSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Number of AFL teams in each state",
    "data": { "values": teamsByState },
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
        "x": {
            "field": "state",
            "type": "nominal",
            "axis": { "labelAngle": -45, "title": "State" }
        },
        "y": {
            "field": "teams",
            "type": "quantitative",
            "axis": { "title": "Number of Teams" }
        },
        "color": {
            "field": "color",
            "type": "nominal",
            "scale": null,
            "legend": null
        },
        "tooltip": [
            { "field": "state", "type": "nominal", "title": "State" },
            { "field": "teams", "type": "quantitative", "title": "Teams" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 3: PREMIERSHIPS BY STATE (BAR CHART)
// =====================================================
const premiershipsByStateData = [
    { "state": "Victoria", "premierships": 100 },
    { "state": "Western Australia", "premierships": 4 },
    { "state": "South Australia", "premierships": 3 },
    { "state": "Queensland", "premierships": 3 },
    { "state": "New South Wales", "premierships": 0 },
    { "state": "Tasmania", "premierships": 0 }
];

const premiershipsStateSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Premiership wins by state",
    "data": { "values": premiershipsByStateData },
    "mark": { "type": "bar", "color": "#2d5a7b", "tooltip": true },
    "encoding": {
        "x": {
            "field": "state",
            "type": "nominal",
            "axis": { "labelAngle": -45, "title": "State" }
        },
        "y": {
            "field": "premierships",
            "type": "quantitative",
            "axis": { "title": "Total Premierships" }
        },
        "tooltip": [
            { "field": "state", "type": "nominal", "title": "State" },
            { "field": "premierships", "type": "quantitative", "title": "Premierships" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 4: TOP 10 TEAMS BY ALL-TIME WINS
// =====================================================
const topTeams = aflTeams
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 10);

const topTeamsSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Top 10 teams by all-time wins",
    "data": { "values": topTeams },
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
        "y": {
            "field": "team",
            "type": "nominal",
            "sort": "-x",
            "axis": { "title": "Team" }
        },
        "x": {
            "field": "wins",
            "type": "quantitative",
            "axis": { "title": "Total Wins" }
        },
        "color": {
            "field": "wins",
            "type": "quantitative",
            "scale": { "scheme": "blues" },
            "legend": null
        },
        "tooltip": [
            { "field": "team", "type": "nominal", "title": "Team" },
            { "field": "wins", "type": "quantitative", "title": "Wins" },
            { "field": "state", "type": "nominal", "title": "State" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 5: PREMIERSHIP WINS BY TEAM (TOP 10)
// =====================================================
const topPremiershipTeams = aflTeams
    .filter(t => t.premierships > 0)
    .sort((a, b) => b.premierships - a.premierships)
    .slice(0, 10);

const premiershipsTeamSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Premiership wins by team (top 10)",
    "data": { "values": topPremiershipTeams },
    "mark": { "type": "bar", "color": "#4a7ba7", "tooltip": true },
    "encoding": {
        "y": {
            "field": "team",
            "type": "nominal",
            "sort": "-x",
            "axis": { "title": "Team" }
        },
        "x": {
            "field": "premierships",
            "type": "quantitative",
            "axis": { "title": "Premierships Won" }
        },
        "tooltip": [
            { "field": "team", "type": "nominal", "title": "Team" },
            { "field": "premierships", "type": "quantitative", "title": "Premierships" },
            { "field": "state", "type": "nominal", "title": "State" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 6: SEASON TREND (LINE CHART)
// =====================================================
const seasonTrendSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Average team wins per season over time",
    "data": { "values": seasonData },
    "mark": { "type": "line", "point": true, "tooltip": true, "color": "#1a3a52", "strokeWidth": 3 },
    "encoding": {
        "x": {
            "field": "season",
            "type": "quantitative",
            "axis": { "title": "Season", "format": "d" }
        },
        "y": {
            "field": "avgWins",
            "type": "quantitative",
            "axis": { "title": "Average Wins per Team" },
            "scale": { "domain": [8, 10] }
        },
        "tooltip": [
            { "field": "season", "type": "quantitative", "title": "Season" },
            { "field": "avgWins", "type": "quantitative", "title": "Avg Wins", "format": ".1f" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 7: FOUNDING YEAR DISTRIBUTION
// =====================================================
const foundingYearSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "AFL teams by founding year",
    "data": { "values": aflTeams },
    "mark": { "type": "bar", "color": "#6d98b8", "tooltip": true },
    "encoding": {
        "x": {
            "field": "founded",
            "type": "quantitative",
            "bin": { "step": 20 },
            "axis": { "title": "Year Founded" }
        },
        "y": {
            "aggregate": "count",
            "type": "quantitative",
            "axis": { "title": "Number of Teams" }
        },
        "tooltip": [
            { "field": "founded", "type": "quantitative", "title": "Year" },
            { "aggregate": "count", "type": "quantitative", "title": "Teams" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 8: SCATTER PLOT - WIN/LOSS RATIO VS YEARS
// =====================================================
const scatterData = aflTeams.map(t => ({
    ...t,
    "age": 2024 - t.founded,
    "win_ratio": (t.wins / (t.wins + (2500 - t.wins))).toFixed(2)
}));

const scatterSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Team history (age) vs win/loss ratio",
    "data": { "values": scatterData },
    "mark": { "type": "circle", "tooltip": true },
    "encoding": {
        "x": {
            "field": "age",
            "type": "quantitative",
            "axis": { "title": "Years Since Founded" }
        },
        "y": {
            "field": "wins",
            "type": "quantitative",
            "axis": { "title": "Total Wins" }
        },
        "color": {
            "field": "state",
            "type": "nominal",
            "scale": {
                "domain": ["Victoria", "Western Australia", "South Australia", "Queensland", "New South Wales", "Tasmania"],
                "range": ["#1a3a52", "#2d5a7b", "#4a7ba7", "#6d98b8", "#90afc7", "#b3c9d8"]
            },
            "title": "State"
        },
        "size": {
            "field": "premierships",
            "type": "quantitative",
            "scale": { "range": [100, 500] },
            "title": "Premierships"
        },
        "tooltip": [
            { "field": "team", "type": "nominal", "title": "Team" },
            { "field": "age", "type": "quantitative", "title": "Years Active" },
            { "field": "wins", "type": "quantitative", "title": "Wins" },
            { "field": "premierships", "type": "quantitative", "title": "Premierships" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 9: STADIUM CAPACITY
// =====================================================
const stadiumSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "AFL stadium capacities",
    "data": { "values": stadiumData },
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
        "y": {
            "field": "stadium",
            "type": "nominal",
            "sort": "-x",
            "axis": { "title": "Stadium" }
        },
        "x": {
            "field": "capacity",
            "type": "quantitative",
            "axis": { "title": "Seating Capacity" }
        },
        "color": {
            "field": "capacity",
            "type": "quantitative",
            "scale": { "scheme": "greens" },
            "legend": null
        },
        "tooltip": [
            { "field": "stadium", "type": "nominal", "title": "Stadium" },
            { "field": "city", "type": "nominal", "title": "City" },
            { "field": "capacity", "type": "quantitative", "title": "Capacity" }
        ]
    },
    "width": 700,
    "height": 400
};

// =====================================================
// VIS 10: OVERALL RANKINGS (CUSTOM)
// =====================================================
const rankingData = aflTeams
    .map(t => ({
        ...t,
        "success_score": (t.wins * 0.7 + t.premierships * 30)
    }))
    .sort((a, b) => b.success_score - a.success_score)
    .slice(0, 12);

const rankingSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Overall team success ranking",
    "data": { "values": rankingData },
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
        "y": {
            "field": "team",
            "type": "nominal",
            "sort": "-x",
            "axis": { "title": "Team" }
        },
        "x": {
            "field": "success_score",
            "type": "quantitative",
            "axis": { "title": "Success Score (Wins + Premierships)" }
        },
        "color": {
            "field": "state",
            "type": "nominal",
            "scale": {
                "domain": ["Victoria", "Western Australia", "South Australia", "Queensland", "New South Wales", "Tasmania"],
                "range": ["#1a3a52", "#2d5a7b", "#4a7ba7", "#6d98b8", "#90afc7", "#b3c9d8"]
            },
            "legend": null
        },
        "tooltip": [
            { "field": "team", "type": "nominal", "title": "Team" },
            { "field": "success_score", "type": "quantitative", "title": "Success Score", "format": ".0f" },
            { "field": "wins", "type": "quantitative", "title": "Wins" },
            { "field": "premierships", "type": "quantitative", "title": "Premierships" }
        ]
    },
    "width": 700,
    "height": 500
};

// =====================================================
// RENDER ALL VISUALISATIONS
// =====================================================

// Render each visualisation
vegaEmbed('#vis-map', mapSpec).catch(e => console.error("Map error:", e));
vegaEmbed('#vis-teams-by-state', teamsPerStateSpec).catch(e => console.error("Teams by state error:", e));
vegaEmbed('#vis-premierships-by-state', premiershipsStateSpec).catch(e => console.error("Premierships by state error:", e));
vegaEmbed('#vis-top-teams', topTeamsSpec).catch(e => console.error("Top teams error:", e));
vegaEmbed('#vis-premierships-by-team', premiershipsTeamSpec).catch(e => console.error("Premierships by team error:", e));
vegaEmbed('#vis-season-trend', seasonTrendSpec).catch(e => console.error("Season trend error:", e));
vegaEmbed('#vis-founding-year', foundingYearSpec).catch(e => console.error("Founding year error:", e));
vegaEmbed('#vis-scatter', scatterSpec).catch(e => console.error("Scatter error:", e));
vegaEmbed('#vis-stadiums', stadiumSpec).catch(e => console.error("Stadium error:", e));
vegaEmbed('#vis-rankings', rankingSpec).catch(e => console.error("Rankings error:", e));
