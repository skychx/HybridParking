//
//  ViewController.m
//  HybridParking
//
//  Created by skychx on 2022/2/20.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self addTextLabel];
}

-(void)addTextLabel{
    UILabel *helloText = [[UILabel alloc]initWithFrame:CGRectMake(20, 200, 280, 80)];
    
    helloText.text = @"Hello HybridParking!";
    [helloText setFont:[UIFont boldSystemFontOfSize:24]];
    [helloText sizeToFit];
    
    [self.view addSubview:helloText];
}


@end
