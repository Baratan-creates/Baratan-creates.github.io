all_metadata["euler_ancestral/ddim_uniform"] = {
  "sui_image_params": {
    "prompt": "a cat playing in a magical rainbow forest",
    "negativeprompt": "flashing lights, bad quality video, blurry, pixelated, chaotic, morphing, flickering, video artifacts, distorted textures, shaky camera",
    "model": "WanX/Text-2-Video/Wan2_1-T2V-1_3B_bf16",
    "seed": 385054103,
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
    "sampler": "euler_ancestral",
    "scheduler": "ddim_uniform",
    "sigmashift": 4.5,
    "vaetilesize": 272,
    "teacachemode": "video only",
    "teacachethreshold": 0.3,
    "automaticvae": true,
    "nopreviews": true,
    "swarm_version": "0.9.5.2"
  },
  "sui_extra_data": {
    "date": "2025-03-15",
    "prep_time": "11.72 min",
    "generation_time": "106.41 sec"
  }
}
file_extensions_alt["euler_ancestral/ddim_uniform"] = "mp4"
fix_video("euler_ancestral/ddim_uniform")