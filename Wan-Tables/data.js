rawData = {
  "title": "Grids/grid-2025-03-15-13-09-09",
  "description": "",
  "ext": "png",
  "min_width": 624,
  "min_height": 368,
  "defaults": {
    "show_descriptions": true,
    "autoscale": false,
    "sticky": false,
    "sticky_labels": true,
    "x": "sampler",
    "y": "scheduler",
    "x2": "none",
    "y2": "none"
  },
  "will_run": true,
  "metadata": null,
  "axes": [
    {
      "id": "sampler",
      "title": "Sampler",
      "description": "",
      "values": [
        {
          "key": "dpm_2",
          "path": "dpm_2",
          "title": "dpm_2",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_2"
          }
        },
        {
          "key": "dpm_2_ancestral",
          "path": "dpm_2_ancestral",
          "title": "dpm_2_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_2_ancestral"
          }
        },
        {
          "key": "dpmpp_2s_ancest",
          "path": "dpmpp_2s_ancest",
          "title": "dpmpp_2s_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2s_ancestral"
          }
        }
      ]
    },
    {
      "id": "scheduler",
      "title": "Scheduler",
      "description": "",
      "values": [
        {
          "key": "simple",
          "path": "simple",
          "title": "simple",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "simple"
          }
        },
        {
          "key": "normal",
          "path": "normal",
          "title": "normal",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "normal"
          }
        },
        {
          "key": "sgm_uniform",
          "path": "sgm_uniform",
          "title": "sgm_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "sgm_uniform"
          }
        },
        {
          "key": "ddim_uniform",
          "path": "ddim_uniform",
          "title": "ddim_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "ddim_uniform"
          }
        },
        {
          "key": "beta",
          "path": "beta",
          "title": "beta",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "beta"
          }
        }
      ]
    }
  ]
}