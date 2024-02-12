$(function () {
    // links to elements on the page
    //this is for changes on 2022-01
    var uiStorage = {

        billingCheckbox: $("#billingCheckbox"),
        billingToggleDot: $("#billing-toggle-dot"),
        currencySelectField: $("#currency-select-field"),
        currencyText: $(".currency-class-identifier"),
        currencyTextLeft: $(".package-left-currency"),

        // it's important that we use class selector here
        // and use .each function as there are multiple places we need 
        // to update the price, because 
        liteCostAmountLeft: $(".lite-cost-amount-left"),
        proCostAmountLeft: $(".pro-cost-amount-left"),
        plusCostAmountLeft: $(".plus-cost-amount-left"),
        growCostAmountLeft: $(".grow-cost-amount-left"),

        liteCostAmount: $("#lite-cost-amount"),
        proCostAmount: $("#pro-cost-amount"),
        plusCostAmount: $("#plus-cost-amount"),
        growCostAmount: $("#grow-cost-amount"),

        packageCostAmountPerYearLite: $(".package-cost-amount-per-year.lite"),
        packageCostAmountPerYearPro: $(".package-cost-amount-per-year.pro"),
        packageCostAmountPerYearPlus: $(".package-cost-amount-per-year.plus"),
        packageCostAmountPerYearGrow: $(".package-cost-amount-per-year.grow"),


        packageSelectionRadioButton: $(".package-card-radio-button"),

        packageCardLeftLite: $(".pricing-left.lite"),
        packageCardLeftPro: $(".pricing-left.pro"),
        packageCardLeftPlus: $(".pricing-left.plus"),
        packageCardLeftGrow: $(".pricing-left.grow"),
        packageCardLeftEnterprise: $(".pricing-left.enterprise"),

        pricingRightBookingFeeTextLite: $(".booking-fee-text-lite"),
        pricingRightBookingFeeTextPro: $(".booking-fee-text-pro"),
        pricingRightBookingFeeTextPlus: $(".booking-fee-text-plus"),
        pricingRightBookingFeeTextGrow: $(".booking-fee-text-grow"),
        pricingRightBookingFeeTextEnterprise: $(".booking-fee-text-enterprise"),

        showOnAnnualContent: $(".show-on-annual"),

        showOnMonthlyContent: $(".show-on-monthly"),



        //pricing table ui storage stuff
        //amount in the table header
        pricingTableAmountLite: $("#pricing-table-amount-lite"),
        pricingTablAmountPro: $("#pricing-table-amount-pro"),
        pricingTableAmountPlus: $("#pricing-table-amount-plus"),
        pricingTableAmountGrow: $("#pricing-table-amount-grow"),

        //currency in the table header
        pricingTableCurrency: $(".pricing-table-currency"),

        //calculator error message
        calculatorErrorMessage: $("#calculator-error-message")


    };

    var bookingFeeLabel = {
        liteBookingFee: "+2% platform booking fee",
        proBookingFee: "+1% platform booking fee",
        plusBookingFee: "+1% platform booking fee",
        growBookingFee: "+1% platform booking fee ",
        enterpriseBookingFee: "0% platform booking fee"

    }

    var packageNameText = {
        light: "Lite",
        pro: "Pro",
        plus: "Plus",
        grow: "Grow",
        enterprise: "Enterprise"
    }



    //2024
    var packageCostPerMonth = {
        liteUSDAnnual: "18",
        liteUSDMonthly: "20",
        liteAUDAnnual: "28",
        liteAUDMonthly: "30",

        proUSDAnnual: "55",
        proUSDMonthly: "60",
        proAUDAnnual: "75",
        proAUDMonthly: "80",

        plusUSDAnnual: "90",
        plusUSDMonthly: "99",
        plusAUDAnnual: "127",
        plusAUDMonthly: "139",

        growUSDAnnual: "164",
        growUSDMonthly: "179",
        growAUDAnnual: "238",
        growAUDMonthly: "259"
    };


    //2024
    var packageCostAmountPerYear = {
        liteUSDPerYear: "216",
        liteAUDPerYear: "226",

        proUSDPerYear: "660",
        proAUDPerYear: "900",

        plusUSDPerYear: "1080",
        plusAUDPerYear: "1524",

        growUSDPerYear: "1968",
        growAUDPerYear: "2856",
    }

    var currencyTextAndSign = {
        currencyUSD: "US$",
        currencyAUD: "A$"
    }



    //set initial values on UI elements
    uiStorage.billingCheckbox.prop('checked', false);
    uiStorage.billingToggleDot.css({ float: "left" });
    uiStorage.currencySelectField.val('usd');
    uiStorage.currencyText.each(function () {
        $(this).html(currencyTextAndSign.currencyUSD);
    });
    uiStorage.currencyTextLeft.each(function () {
        $(this).html(currencyTextAndSign.currencyUSD);
    });


    //setup initial value of cost
    //containing cost amount label for desktop view and mobile view on the left panel
    //default to show USD Annual Per Month Price
    uiStorage.liteCostAmountLeft.each(function () {
        $(this).html(packageCostPerMonth.liteUSDAnnual);
    });
    uiStorage.proCostAmountLeft.each(function () {
        $(this).html(packageCostPerMonth.proUSDAnnual);
    });
    uiStorage.plusCostAmountLeft.each(function () {
        $(this).html(packageCostPerMonth.plusUSDAnnual);
    });
    uiStorage.growCostAmountLeft.each(function () {
        $(this).html(packageCostPerMonth.growUSDAnnual);
    });

    //set up initial value of cost for desktop switch card
    //default to show USD Annual Per Month Price
    uiStorage.liteCostAmount.html(packageCostPerMonth.liteUSDAnnual);
    uiStorage.proCostAmount.html(packageCostPerMonth.proUSDAnnual);
    uiStorage.plusCostAmount.html(packageCostPerMonth.plusUSDAnnual);
    uiStorage.growCostAmount.html(packageCostPerMonth.growUSDAnnual);

    //set up initial value of cost for pricing comparison page
    //default to show USD Annual Per Month Price
    uiStorage.pricingTableAmountLite.html(packageCostPerMonth.liteUSDAnnual);
    uiStorage.pricingTableAmountPro.html(packageCostPerMonth.proUSDAnnual);
    uiStorage.pricingTableAmountPlus.html(packageCostPerMonth.plusUSDAnnual);
    uiStorage.pricingTableAmountGrow.html(packageCostPerMonth.growUSDAnnual);


    //set up initial value to show Only Show on Annual Content
    //also hide only show on monthly content
    uiStorage.showOnAnnualContent.each(function () {
        $(this).show();
    });

    uiStorage.showOnMonthlyContent.each(function () {
        $(this).hide();
    });

    //radio button defaults is set in the designer via custom attribute
    //packageSelectionRadioButton: $(".package-card-radio-button"),


    uiStorage.packageCardLeftLite.show();
    //the display of the rest are set in the designer
    //because those are hidden on desktop but shown on mobile !
    // uiStorage.packageCardLeftBYO.hide();
    // uiStorage.packageCardLeftPNP.hide();
    // uiStorage.packageCardLeftEnterprise.hide();

    //set up booking fees on left and right and on pricing table
    uiStorage.pricingRightBookingFeeTextLite.each(function () {
        $(this).html(bookingFeeLabel.liteBookingFee);
    });
    uiStorage.pricingRightBookingFeeTextPro.each(function () {
        $(this).html(bookingFeeLabel.proBookingFee);
    });
    uiStorage.pricingRightBookingFeeTextPlus.each(function () {
        $(this).html(bookingFeeLabel.plusBookingFee);
    });
    uiStorage.pricingRightBookingFeeTextGrow.each(function () {
        $(this).html(bookingFeeLabel.growBookingFee);
    });
    uiStorage.pricingRightBookingFeeTextEnterprise.each(function () {
        $(this).html(bookingFeeLabel.enterpriseBookingFee);
    });


    //set up initial value of billed annual cost
    //default is annual usd
    uiStorage.packageCostAmountPerYearLite.each(function(){
        $(this).html(packageCostAmountPerYear.liteUSDPerYear);
    });
    uiStorage.packageCostAmountPerYearPro.each(function(){
        $(this).html(packageCostAmountPerYear.proUSDPerYear);
    });
    uiStorage.packageCostAmountPerYearPlus.each(function(){
        $(this).html(packageCostAmountPerYear.plusUSDPerYear);
    });
    uiStorage.packageCostAmountPerYearGrow.each(function(){
        $(this).html(packageCostAmountPerYear.growUSDPerYear);
    });

    //end of initial value setup


    //calculating methods
    uiStorage.billingCheckbox.change(function () {
        if (uiStorage.billingCheckbox.is(':checked')) {
            uiStorage.billingToggleDot.css({ float: "right" });
        } else {
            uiStorage.billingToggleDot.css({ float: "left" });
        }
        //uiStorage.billingCheckbox.is(':checked')? true: false;
        costSwitch();
    });

    uiStorage.currencySelectField.change(function () {
        costSwitch();
    })



    uiStorage.packageSelectionRadioButton.change(function () {
        cardSwitch();
    })

    var cardSwitch = function () {

        var checkedPackageCard = $("input[type='radio'][name='Package-card']:checked").val();
        switch (checkedPackageCard) {
            case 'lite':
                uiStorage.packageCardLeftLite.show();
                uiStorage.packageCardLeftPro.hide();
                uiStorage.packageCardLeftPlus.hide();
                uiStorage.packageCardLeftGrow.hide();
                uiStorage.packageCardLeftEnterprise.hide();
                break;

            case 'pro':
                uiStorage.packageCardLeftLite.hide();
                uiStorage.packageCardLeftPro.show();
                uiStorage.packageCardLeftPlus.hide();
                uiStorage.packageCardLeftGrow.hide();
                uiStorage.packageCardLeftEnterprise.hide();
                break;

            case 'plus':
                uiStorage.packageCardLeftLite.hide();
                uiStorage.packageCardLeftPro.hide();
                uiStorage.packageCardLeftPlus.show();
                uiStorage.packageCardLeftGrow.hide();
                uiStorage.packageCardLeftEnterprise.hide();
                break;

            case 'grow':
                uiStorage.packageCardLeftLite.hide();
                uiStorage.packageCardLeftPro.hide();
                uiStorage.packageCardLeftPlus.hide();
                uiStorage.packageCardLeftGrow.show();
                uiStorage.packageCardLeftEnterprise.hide();
                break;

            case 'enterprise':
                uiStorage.packageCardLeftLite.hide();
                uiStorage.packageCardLeftPro.hide();
                uiStorage.packageCardLeftPlus.hide();
                uiStorage.packageCardLeftGrow.hide();
                uiStorage.packageCardLeftEnterprise.show();
                break;
            default:
                alert('Nobody Wins!');
        }
    }



    var costSwitch = function () {
        //switching to usd

        if (uiStorage.currencySelectField.val().toLowerCase() === "usd") {
            //alert(uiStorage.currencySelectField.val());
            if (uiStorage.billingCheckbox.is(':checked')) {
                //switch to monthly

                uiStorage.liteCostAmount.html(packageCostPerMonth.liteUSDMonthly);
                uiStorage.proCostAmount.html(packageCostPerMonth.proUSDMonthly);
                uiStorage.plusCostAmount.html(packageCostPerMonth.plusUSDMonthly);
                uiStorage.growCostAmount.html(packageCostPerMonth.growUSDMonthly);


                //updating cost amount label on the left hand side
                uiStorage.liteCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.liteUSDMonthly);
                });
                uiStorage.proCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.proUSDMonthly);
                });
                uiStorage.plusCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.plusUSDMonthly);
                });
                uiStorage.growCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.growUSDMonthly);
                });


                //updating cost amount label on pricing table
                uiStorage.pricingTableAmountLite.html(packageCostPerMonth.liteUSDMonthly);
                uiStorage.pricingTablAmountPro.html(packageCostPerMonth.proUSDMonthly);
                uiStorage.pricingTableAmountPlus.html(packageCostPerMonth.plusUSDMonthly);
                uiStorage.pricingTableAmountGrow.html(packageCostPerMonth.growUSDMonthly);


                uiStorage.showOnAnnualContent.each(function () {
                    $(this).hide();
                })

                uiStorage.showOnMonthlyContent.each(function () {
                    $(this).show();
                })

            } else {
                //alert("switch to annually");
                uiStorage.liteCostAmount.html(packageCostPerMonth.liteUSDAnnual);
                uiStorage.proCostAmount.html(packageCostPerMonth.proUSDAnnual);
                uiStorage.plusCostAmount.html(packageCostPerMonth.plusUSDAnnual);
                uiStorage.growCostAmount.html(packageCostPerMonth.growUSDAnnual);


                //updating cost amount label on the left hand side
                uiStorage.liteCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.liteUSDAnnual);
                });
                uiStorage.proCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.proUSDAnnual);
                });
                uiStorage.plusCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.plusUSDAnnual);
                });
                uiStorage.growCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.growUSDAnnual);
                });

                //updating cost amount label on pricing table
                uiStorage.pricingTableAmountLite.html(packageCostPerMonth.liteUSDAnnual);
                uiStorage.pricingTablAmountPro.html(packageCostPerMonth.proUSDAnnual);
                uiStorage.pricingTableAmountPlus.html(packageCostPerMonth.plusUSDAnnual);
                uiStorage.pricingTableAmountGrow.html(packageCostPerMonth.growUSDAnnual);

                // setup annual billing amount billed annually on both pricing and pricing comparison page
                uiStorage.packageCostAmountPerYearLite.each(function(){
                    $(this).html(packageCostAmountPerYear.liteUSDPerYear);
                });
                uiStorage.packageCostAmountPerYearPro.each(function(){
                    $(this).html(packageCostAmountPerYear.proUSDPerYear);
                });
                uiStorage.packageCostAmountPerYearPlus.each(function(){
                    $(this).html(packageCostAmountPerYear.plusUSDPerYear);
                });
                uiStorage.packageCostAmountPerYearGrow.each(function(){
                    $(this).html(packageCostAmountPerYear.growUSDPerYear);
                });


                //since this is on annual, we want to show content that are SHOWN ON ANNUAL
                uiStorage.showOnAnnualContent.each(function () {
                    $(this).show();
                })

                uiStorage.showOnMonthlyContent.each(function () {
                    $(this).hide();
                })
            }

            uiStorage.currencyText.each(function () {
                $(this).html(currencyTextAndSign.currencyUSD);
            });

            uiStorage.currencyTextLeft.each(function () {
                $(this).html(currencyTextAndSign.currencyUSD);
            });


        } else {


            //switching to aud
            if (uiStorage.billingCheckbox.is(':checked')) {
                //alert("switch to monthly");
                uiStorage.liteCostAmount.html(packageCostPerMonth.liteAUDMonthly);
                uiStorage.proCostAmount.html(packageCostPerMonth.proAUDMonthly);
                uiStorage.plusCostAmount.html(packageCostPerMonth.plusAUDMonthly);
                uiStorage.growCostAmount.html(packageCostPerMonth.growAUDMonthly);



                uiStorage.liteCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.liteAUDMonthly);
                });
                uiStorage.proCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.proAUDMonthly);
                });
                uiStorage.plusCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.plusAUDMonthly);
                });
                uiStorage.growCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.growAUDMonthly);
                });


                //updating cost amount label on pricing table
                uiStorage.pricingTableAmountLite.html(packageCostPerMonth.liteAUDMonthly);
                uiStorage.pricingTablAmountPro.html(packageCostPerMonth.proAUDMonthly);
                uiStorage.pricingTableAmountPlus.html(packageCostPerMonth.plusAUDMonthly);
                uiStorage.pricingTableAmountGrow.html(packageCostPerMonth.growAUDMonthly);



                uiStorage.showOnAnnualContent.each(function () {
                    $(this).hide();
                })

                uiStorage.showOnMonthlyContent.each(function () {
                    $(this).show();
                })


            } else {
                //alert("switch to annually");
                uiStorage.liteCostAmount.html(packageCostPerMonth.liteAUDAnnual);
                uiStorage.proCostAmount.html(packageCostPerMonth.proAUDAnnual);
                uiStorage.plusCostAmount.html(packageCostPerMonth.plusAUDAnnual);
                uiStorage.growCostAmount.html(packageCostPerMonth.growAUDAnnual);


                uiStorage.liteCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.liteAUDAnnual);
                });
                uiStorage.proCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.proAUDAnnual);
                });
                uiStorage.plusCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.plusAUDAnnual);
                });
                uiStorage.growCostAmountLeft.each(function () {
                    $(this).html(packageCostPerMonth.growAUDAnnual);
                });

                //updating cost amount label on pricing table
                uiStorage.pricingTableAmountLite.html(packageCostPerMonth.liteAUDAnnual);
                uiStorage.pricingTablAmountPro.html(packageCostPerMonth.proAUDAnnual);
                uiStorage.pricingTableAmountPlus.html(packageCostPerMonth.plusAUDAnnual);
                uiStorage.pricingTableAmountGrow.html(packageCostPerMonth.growAUDAnnual);


                // setup annual billing amount billed annually AUD for both pricing page and pricing comparison page
                uiStorage.packageCostAmountPerYearLite.each(function(){
                    $(this).html(packageCostAmountPerYear.liteAUDPerYear);
                });
                uiStorage.packageCostAmountPerYearPro.each(function(){
                    $(this).html(packageCostAmountPerYear.proAUDPerYear);
                });
                uiStorage.packageCostAmountPerYearPlus.each(function(){
                    $(this).html(packageCostAmountPerYear.plusAUDPerYear);
                });
                uiStorage.packageCostAmountPerYearGrow.each(function(){
                    $(this).html(packageCostAmountPerYear.growAUDPerYear);
                });


                //this is on annual so we need to show content that's only shown on annual
                uiStorage.showOnAnnualContent.each(function () {
                    $(this).show();
                })

                uiStorage.showOnMonthlyContent.each(function () {
                    $(this).hide();
                })
            }

            uiStorage.currencyText.each(function () {
                $(this).html(currencyTextAndSign.currencyAUD);
            });

            uiStorage.currencyTextLeft.each(function () {
                $(this).html(currencyTextAndSign.currencyAUD);
            });
            
        }

       // updatePricingTable();
    }


});


