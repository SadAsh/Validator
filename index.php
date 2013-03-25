<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Validator</title>
        <link rel="stylesheet" type="text/css" media="screen" href="/css/bootstrap-responsive.min.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="/css/main.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="/css/datepicker.css" />
        <script type="text/javascript" src="/js/jquery-1.7.2.min.js"></script>  
        <script type="text/javascript" src="/js/bootstrap-datepicker.js"></script>  
    </head>
    <body>
        <script type="text/javascript">
            $(document).ready(function(){
                $('#user_birthday').datepicker();
            })
           
        </script>
        <form class="form-horizontal" id="registerHere" method='post' action=''>
            <fieldset>

                <legend>Registration</legend>

                <div class="control-group">
                    <label class="control-label">Do you like cookies?</label>
                    <div class="clr"></div> 
                    <div class="controls">
                        <label class="left">Yes</label>
                        <input type="radio" val="yes" onclick="$('#cookies_input').hide();" class="left radio" name="cookies" />
                    </div>
                    <div class="clr"></div> 
                    <div class="controls">
                        <label class="left">No</label>
                        <input type="radio" val="no" onclick="$('#cookies_input').hide();" class="left radio" name="cookies" />
                    </div>
                    <div class="clr"></div> 
                    <div class="controls">
                        <label class="left">Other</label>
                        <input type="radio" val="other" onclick="$('#cookies_input').show();" class="left radio" name="cookies" />
                        <div class="clr"></div> 
                        <input type="text" class="input-xlarge" id="cookies_input" name="cookies_other" rel="popover"/>
                    </div>
                    <div class="clr"></div> 
                </div>

                <div class="control-group">
                    <label class="control-label">First Name</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_name" name="first_name" rel="popover" data-content="Enter your first name." data-original-title="First Name"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Last Name</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_name" name="last_name" rel="popover" data-content="Enter your last name." data-original-title="Last Name"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Email</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_email" name="email" rel="popover" data-content="What’s your email address?" data-original-title="Email"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Birthday</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_birthday" name="birthday" rel="popover" data-content="What’s your Birthday date?" data-original-title="Birthday"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Address 1</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_address1" name="address1" rel="popover" data-content="What’s your address?" data-original-title="Address"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Address 2</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_address2" name="address2" rel="popover" data-content="What’s your address?" data-original-title="Address"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Country</label>
                    <div class="controls">
                        <select type="" class="" id="user_country" name="country" rel="popover" data-content="What’s your country?" data-original-title="Country">
                            <option value="ukrain">Ukrain</option>
                            <option value="uganda">Uganda</option>
                            <option value="deli">Deli</option>
                            <option value="northern_korea">Northern Korea</option>
                            <option value="south_korea">South Korea</option>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">State</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_state" name="state" rel="popover" data-content="What’s your state?" data-original-title="State"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">City</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_city" name="city" rel="popover" data-content="What’s your city?" data-original-title="City"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Zip</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="user_zip" name="zip" rel="popover" data-content="What’s your zip?" data-original-title="Zip"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">Sex</label>
                    <div class="controls">
                        <select type="" class="" id="user_sex" name="country" rel="popover" data-content="What’s your sex?" data-original-title="Sex">
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                </div>


                <div class="control-group">
                    <label class="control-label">I agree with terms of use</label>
                    <div class="controls">
                        <input type="checkbox" class="" id="terms" name="terms" rel="popover" data-content="Did You agree with terms of use?" data-original-title="Terms of use">
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">subscribe on newsletter?</label>
                    <div class="controls">
                        <input type="checkbox" class="" id="newsletter" name="newsletter" rel="popover" data-content="Subscribe on newsletter?" data-original-title="Subscribe on newsletter">
                    </div>
                </div>  

                <div class="control-group">
                    <label class="control-label"></label>
                    <div class="controls">
                        <button type="submit" class="btn btn-success" >Apply</button>
                    </div>
                </div>

            </fieldset>
        </form>
    </body>
</html>