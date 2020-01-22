//
//  AppDelegate.swift
//  rn_arch_demo
//
//  Created by Rafael Ruiz on 21/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let jsCodeLocation: URL
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "rn_arch_demo", initialProperties: nil, launchOptions: launchOptions)

    let rootViewController = UIViewController()
    rootViewController.view = rootView
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    return true
  }
  
}

func sourceURLForBridge(_bridge: RCTBridge) -> URL{
#if DEBUG
//return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  return RCTBundleURLProvider.sharedSettings()?.jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
#else
//return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  return Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
#endif
}
