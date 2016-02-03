//
//  ViewController.swift
//  Calculator
//
//  Created by BrainStation on 2016-01-30.
//  Copyright © 2016 BrainStation. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    //Instance variable -- Property
   
    @IBOutlet weak var display: UILabel!
     var userIsInTheMiddleOfTypingANumber: Bool = false
    @IBAction func appendDigit(sender: UIButton) {
        let digit = sender.currentTitle!
        if userIsInTheMiddleOfTypingANumber {
        display.text = display.text! + digit
        }else{
            display.text = digit
            userIsInTheMiddleOfTypingANumber = true
        }
        
    }


}

