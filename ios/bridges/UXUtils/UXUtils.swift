//
//  SoundPlayer.swift
//  rn_arch_demo
//
//  Created by Rafael Ruiz on 21/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(UXUtils) class UXUtils: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func launchSettings() {
    UIApplication.shared.openURL(URL(string: UIApplication.openSettingsURLString)!)
  }
}
