﻿using System;

namespace CloudDrive.Models.Entities
{
    public class File
    {
        private File()
        {

        }

        public File(string userFriendlyName, string physicalFileName, long sizeAsKB, Guid uploadedById, User uploadedBy)
        {
            UserFriendlyName = userFriendlyName;
            PhysicalFileName = physicalFileName;
            SizeAsKB = sizeAsKB;
            UploadedById = uploadedById;
            UploadedBy = uploadedBy;
        }

        public Guid Id { get; private set; } = Guid.NewGuid();

        public string UserFriendlyName { get; set; }

        public string PhysicalFileName { get; set; }

        public long SizeAsKB { get; private set; }

        public bool IsAccessibleForEveryone { get; set; } = false;

        public Guid UploadedById { get; private set; }

        public User UploadedBy { get; private set; }

        public DateTime UploadedAt { get; private set; } = DateTime.Now;
    }
}