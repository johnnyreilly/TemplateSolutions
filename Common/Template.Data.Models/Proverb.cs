﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Template.Data.Models
{
    public class Proverb
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public string Text { get; set; }
    }
}
