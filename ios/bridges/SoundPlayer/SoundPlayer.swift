//
//  SoundPlayer.swift
//  rn_arch_demo
//
//  Created by Rafael Ruiz on 21/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import SwiftySound

@objc(SoundPlayer) class SoundPlayer: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func play() {
    Sound.play(file: "morado.mp3")
  }
  
  @objc func stop() {
    Sound.stopAll()
  }
}
