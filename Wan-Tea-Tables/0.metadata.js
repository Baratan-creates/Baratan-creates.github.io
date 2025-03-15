all_metadata["0"] = {
  "sui_image_params": {
    "prompt": "a cat playing in a magical rainbow forest",
    "negativeprompt": "flashing lights, bad quality video, blurry, pixelated, chaotic, morphing, flickering, video artifacts, distorted textures, shaky camera",
    "model": "WanX/Text-2-Video/Wan2_1-T2V-1_3B_bf16",
    "seed": 1711074260,
    "steps": 25,
    "cfgscale": 5.0,
    "textvideoframes": 61,
    "textvideofps": 24,
    "textvideoboomerang": true,
    "textvideoformat": "h264-mp4",
    "textvideoframeinterpolationmethod": "RIFE",
    "textvideoframeinterpolationmultiplier": 2,
    "aspectratio": "16:9",
    "width": 832,
    "height": 480,
    "sigmashift": 4.5,
    "vaetilesize": 272,
    "teacachemode": "video only",
    "teacachethreshold": 0.0,
    "automaticvae": true,
    "nopreviews": true,
    "swarm_version": "0.9.5.2"
  },
  "sui_extra_data": {
    "date": "2025-03-15",
    "prep_time": "2.05 sec",
    "generation_time": "4.09 min"
  }
}
file_extensions_alt["0"] = "mp4"
fix_video("0")