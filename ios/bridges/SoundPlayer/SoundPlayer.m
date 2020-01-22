//
//  SoundPlayer.m
//  rn_arch_demo
//
//  Created by Rafael Ruiz on 21/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_REMAP_MODULE(SoundPlayerIOS, SoundPlayer, NSObject)

RCT_EXTERN_METHOD(play)
RCT_EXTERN_METHOD(stop)
@end
