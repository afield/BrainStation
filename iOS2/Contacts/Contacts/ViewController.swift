//
//  ViewController.swift
//  Contacts
//
//  Created by BrainStation on 2016-01-26.
//  Copyright © 2016 BrainStation. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var contactNameLabel:UILabel!

    var contactsArray = ["Bob","Gazpacho"];
    
    let name = contactsArray[0]
    contactNameLabel.text = "\(name)"
    
    @IBAction func nextButtonTapped(){
        
    }
    
    @IBAction func lastButtonTapped(){
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
      
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

