all_metadata["dpm_2_ancestral/sgm_uniform"] = {
  "sui_image_params": {
    "prompt": "a cat playing in a magical rainbow forest",
    "negativeprompt": "bad quality video, blurry, pixelated, chaotic, morphing, flickering, video artifacts, distorted textures, shaky camera",
    "model": "WanX/Text-2-Video/Wan2_1-T2V-1_3B_bf16",
    "seed": 1547175559,
    "steps": 25,
    "cfgscale": 5.0,
    "textvideoframes": 61,
    "textvideofps": 24,
    "textvideoboomerang": true,
    "textvideoformat": "h264-mp4",
    "textvideoframeinterpolationmethod": "RIFE",
    "textvideoframeinterpolationmultiplier": 2,
    "aspectratio": "16:9",
    "width": 624,
    "height": 368,
    "sampler": "dpm_2_ancestral",
    "sigmashift": 4.5,
    "vaetilesize": 272,
    "teacachemode": "video only",
    "teacachethreshold": 0.3,
    "automaticvae": true,
    "scheduler": "sgm_uniform",
    "nopreviews": true,
    "swarm_version": "0.9.5.2"
  },
  "sui_extra_data": {
    "date": "2025-03-15",
    "prep_time": "2.19 min",
    "generation_time": "82.39 sec"
  }
}
file_extensions_alt["dpm_2_ancestral/sgm_uniform"] = "mp4"
fix_video("dpm_2_ancestral/sgm_uniform")