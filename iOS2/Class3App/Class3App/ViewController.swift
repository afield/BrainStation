//
//  ViewController.swift
//  Class3App
//
//  Created by BrainStation on 2016-01-25.
//  Copyright © 2016 BrainStation. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    
    @IBOutlet var numLabel:UILabel!
    var num = 2
    
    @IBAction func addButtonTapped(){
       
        num += 2
        numLabel.text = "\(num)"
    }
    @IBAction func subtractButtonTapped(){
        num -= 2
        numLabel.text = "\(num)"
    
    }
    
}

