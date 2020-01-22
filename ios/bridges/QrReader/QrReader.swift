//
//  QrReader.swift
//  rn_arch_demo
//
//  Created by Rafael Ruiz on 21/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(QrReader) class QrReader: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  var callback: RCTResponseSenderBlock?
  
  @objc func startScan(_ callback: @escaping RCTResponseSenderBlock) {
    self.callback = callback
    NotificationCenter.default.addObserver(self, selector: #selector(onQrRead(notification:)),
                                           name: Notification.Name("onQrRead"), object: nil)
    
    DispatchQueue.main.async {
      let vc = ScanViewController()
      RCTPresentedViewController()?.present(vc, animated: true, completion: nil)
    }
  }
  
  @objc func onQrRead(notification: NSNotification) {
    let qrContent = notification.userInfo?["qrContent"]
    if (qrContent != nil) {
      callback!([nil, qrContent])
    } else {
      callback!(["There was an error while reading the code", nil])
    }
    NotificationCenter.default.removeObserver(self)
  }
  
}
