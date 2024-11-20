﻿using System.ComponentModel.DataAnnotations;

namespace TravelAgency.Domain
{
    public class LoginViewModel
    {
        
        
            [Required(ErrorMessage = "Введите почту")]
            [EmailAddress(ErrorMessage = "Некорректный адрес электронной почты")]
            public string Email { get; set; }
        [Required(ErrorMessage = "Введите пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
