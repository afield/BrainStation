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
    var contacts = "My Contacts"
    
    @IBAction func addButtonTapped(){
       
        numLabel.text = contacts
    }
    @IBAction func subtractButtonTapped(){
        numLabel.text = "Hola"
    
    }
    
}

